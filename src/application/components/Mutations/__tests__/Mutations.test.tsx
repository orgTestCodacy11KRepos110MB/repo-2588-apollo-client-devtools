import React from "react";
import { within, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";

import { renderWithApolloClient } from "../../../utilities/testing/renderWithApolloClient";
import { client, GET_MUTATIONS } from "../../../index";
import { Mutations } from "../Mutations";

jest.mock("../MutationViewer", () => ({
  MutationViewer: () => null,
}));

describe("<Mutations />", () => {
  const mutations = [
    {
      id: 0,
      __typename: "Mutation",
      name: null,
    },
    {
      id: 1,
      __typename: "Mutation",
      name: "AddColorToFavorites",
    },
  ];

  const navigationProps = {
    queriesCount: 0,
    mutationsCount: 2,
  };

  beforeEach(() => {
    client.clearStore();
  });

  test("queries render in the sidebar", async () => {
    client.writeQuery({
      query: GET_MUTATIONS,
      data: {
        mutationLog: {
          mutations,
          count: mutations.length,
        },
      },
    });

    const { getByTestId } = renderWithApolloClient(
      <Mutations navigationProps={navigationProps} embeddedExplorerProps={{ embeddedExplorerIFrame: null }}/>
    );

    const sidebar = getByTestId("sidebar");
    await waitFor(() => {
      expect(
        within(sidebar).queryAllByText(
          `Mutations (${navigationProps.mutationsCount})`
        ).length
      ).toBe(2);
      expect(within(sidebar).getByText("Unnamed")).toBeInTheDocument();
      expect(
        within(sidebar).getByText("AddColorToFavorites")
      ).toBeInTheDocument();
    });
  });

  test("renders query name", async () => {
    client.writeQuery({
      query: GET_MUTATIONS,
      data: {
        mutationLog: {
          mutations,
          count: mutations.length,
        },
      },
    });

    const { getByTestId } = renderWithApolloClient(
      <Mutations navigationProps={navigationProps} embeddedExplorerProps={{ embeddedExplorerIFrame: null }}/>
    );

    const header = getByTestId("header");
    expect(within(header).getByText("Unnamed")).toBeInTheDocument();

    const sidebar = getByTestId("sidebar");
    user.click(within(sidebar).getByText("AddColorToFavorites"));
    await waitFor(() => {
      expect(
        within(header).getByText("AddColorToFavorites")
      ).toBeInTheDocument();
    });
  });

  test("it renders an empty state", () => {
    const { getByTestId } = renderWithApolloClient(
      <Mutations navigationProps={navigationProps} embeddedExplorerProps={{ embeddedExplorerIFrame: null }}/>
    );

    expect(getByTestId("header")).toBeEmptyDOMElement();
    expect(getByTestId("main")).toBeEmptyDOMElement();
  });
});
