import { renderHook } from "@testing-library/react-hooks";
import authorsApi from "services/api/authorsApi";
import useAuthors from ".";

describe("useAuthors", () => {
  let hook: ReturnType<typeof useAuthors>;

  beforeEach(() => {
    const { result } = renderHook(() => useAuthors());
    hook = result.current;
  });

  describe("#getAuthors", () => {
    beforeEach(() => {
      authorsApi.getAuthorsList = jest.fn(() => ({} as any));
    });

    it("calls getAuthorsList with correct params", () => {
      hook.getAuthors();
      expect(authorsApi.getAuthorsList).toHaveBeenCalled();
    });
  });

  describe("#getAuthor", () => {
    beforeEach(() => {
      authorsApi.getAuthor = jest.fn(() => ({} as any));
    });

    it("calls getAuthor with correct params", () => {
      const id = "1";
      hook.getAuthor(id);
      expect(authorsApi.getAuthor).toHaveBeenCalledWith(id);
    });
  });

  describe("#createAuthor", () => {
    const data = {
      name: "Author 1",
    };

    beforeEach(() => {
      authorsApi.createAuthor = jest.fn(() => ({} as any));
    });

    it("calls createAuthor with correct params", () => {
      hook.createAuthor(data);
      expect(authorsApi.createAuthor).toHaveBeenCalled();
      expect(authorsApi.createAuthor).toHaveBeenCalledWith(data);
    });
  });

  describe("#updateAuthor", () => {
    const data = {
      id: 1,
      name: "Author 1",
    };

    beforeEach(() => {
      authorsApi.updateAuthor = jest.fn(() => ({} as any));
    });

    it("calls updateAuthor with correct params", () => {
      hook.updateAuthor(data);
      expect(authorsApi.updateAuthor).toHaveBeenCalled();
      expect(authorsApi.updateAuthor).toHaveBeenCalledWith(data.id, data);
    });
  });
});
