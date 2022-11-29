import storiesApi from "services/api/storiesApi";

function useStories() {
  async function getStories(nonProfitId: number | string) {
    const { data: stories } = await storiesApi.getNonProfitStories(nonProfitId);

    return stories;
  }

  async function getStory(id: any) {
    const { data: story } = await storiesApi.getStory(id);

    return story;
  }

  function deleteStory(id: number) {
    return storiesApi.deleteStory(id);
  }

  return {
    getStories,
    getStory,
    deleteStory,
  };
}

export default useStories;
