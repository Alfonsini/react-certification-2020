const VideoReducer = (state, action) => {
  switch (action.type) {
    case 'IS_FETCHING': {
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    }
    case 'SET_VIDEOS': {
      return {
        ...state,
        videosList: action.payload.videosList,
        isLoading: false,
      };
    }
    case 'SET_ERROR_MESSAGE': {
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        isLoading: false,
      };
    }
    case 'SELECT_VIDEO': {
      return {
        ...state,
        currentVideoId: action.payload.currentVideoId,
        currentVideoTitle: action.payload.currentVideoTitle,
        currentVideoDescription: action.payload.currentVideoDescription,
      };
    }
    case 'CLEAR': {
      return {
        ...state,
        videosList: {},
        isLoading: false,
        errorMessage: '',
        currentVideoId: '',
        currentVideoTitle: '',
        currentVideoDescription: '',
      };
    }
    default:
      return state;
  }
};

export { VideoReducer };
