// ACTION TYPE POTS
export const POTS = 'POTS';

// ACTION CREATOR login
export const pots = () => ({
  type: POTS,
});

// ACTION TYPE GET_ID_FROM_POT_DETAIL
export const GET_POT_ID = 'GET_POT_ID';

// ACTION CREATOR login
export const getPotId = () => ({
  type: GET_POT_ID,
});

// ACTION TYPE ADFD_AMOUNT
export const ADD_AMOUNT = 'ADD_AMOUNT';

// ACTION CREATOR ADFD_AMOUNT
export const addAmount = () => ({
  type: ADD_AMOUNT,
});

// ACTION TYPE RETRY_AMOUNT
export const RETRY_AMOUNT = 'RETRY_AMOUNT';

// ACTION CREATOR RETRY_AMOUNT
export const retryAmount = () => ({
  type: RETRY_AMOUNT,
});

// ACTION TYPE ADD_POT
export const ADD_POT = 'ADD_POT';

// ACTION CREATOR ADD_POT
export const addPot = () => ({
  type: ADD_POT,
});

// ACTION TYPE listPotsApi
export const LIST_POTS_API = 'LIST_POTS_API';

// ACTION CREATOR listPotsApi
export const listPotsApi = (potsApi) => ({
  type: LIST_POTS_API,
  potsApi,
});

// ACTION TYPE SET_POT_NAME
export const SET_POT_NAME = 'SET_POT_NAME';

// ACTION CREATOR SET_POT_NAME
export const setPotName = (name) => ({
  type: SET_POT_NAME,
  name,
});

// ACTION TYPE SET_POT_GOAL
export const SET_POT_GOAL = 'SET_POT_GOAL';

// ACTION CREATOR SET_POT_GOAL
export const setPotGoal = (PotGoal) => ({
  type: SET_POT_GOAL,
  PotGoal,
});

// ACTION TYPE SET_POT_DATE_GOAL
export const SET_POT_DATE_GOAL = 'SET_POT_DATE_GOAL';

// ACTION CREATOR SET_POT_DATE_GOAL
export const setPotDateGoal = (PotDateGoal) => ({
  type: SET_POT_DATE_GOAL,
  PotDateGoal,
});

// ACTION TYPE SAVE_USER_FROM_LOCSAVE_POTS_FROM_LOCALSTORAGEALSTORAGE
export const SAVE_POTS_FROM_LOCALSTORAGE = 'SAVE_POTS_FROM_LOCALSTORAGE';

// ACTION CREATOR savePotsFromLocalStorage
export const savePotsFromLocalStorage = (potsUser) => ({
  type: SAVE_POTS_FROM_LOCALSTORAGE,
  potsUser,
});

// ACTION TYPE HISTORY
export const HISTORY = 'HISTORY';

// ACTION CREATOR history
export const history = () => ({
  type: HISTORY,
});

// ACTION TYPE GET_MOVEMENT_POT
export const GET_MOVEMENT_POT = 'GET_MOVEMENT_POT';

// ACTION CREATOR getMovementPot
export const getMovementPot = () => ({
  type: GET_MOVEMENT_POT,
});

// ACTION TYPE HISTORY_API
export const HISTORY_API = 'HISTORY_API';

// ACTION CREATOR historyApi
export const historyApi = (historys) => ({
  type: HISTORY_API,
  historys,
});

// ACTION TYPE SET_AMOUNT_ADD
export const SET_AMOUNT_ADD = 'SET_AMOUNT_ADD';

// ACTION CREATOR setAmountAdd
export const setAmountAdd = (amountAdd) => ({
  type: SET_AMOUNT_ADD,
  amountAdd,
});

// ACTION TYPE SET_AMOUNT_WITHDRAW
export const SET_AMOUNT_WITHDRAW = 'SET_AMOUNT_WITHDRAW';

// ACTION CREATOR setAmountWithdraw
export const setAmountWithdraw = (amountWithdraw) => ({
  type: SET_AMOUNT_WITHDRAW,
  amountWithdraw,
});

// ACTION TYPE SET_SHOW_MODAL_ADD
export const SET_SHOW_MODAL_ADD_TRUE = 'SET_SHOW_MODAL_ADD_TRUE';

// ACTION CREATOR setAmountWithdraw
export const setShowModalAddTrue = () => ({
  type: SET_SHOW_MODAL_ADD_TRUE,
});

// ACTION TYPE SET_SHOW_MODAL_ADD
export const SET_SHOW_MODAL_ADD_FALSE = 'SET_SHOW_MODAL_ADD_FALSE';

// ACTION CREATOR setAmountWithdraw
export const setShowModalAddFalse = () => ({
  type: SET_SHOW_MODAL_ADD_FALSE,
});

// ACTION TYPE SET_SHOW_MODAL_WITHDRAW_TRUE
export const SET_SHOW_MODAL_WITHDRAW_TRUE = 'SET_SHOW_MODAL_WITHDRAW_TRUE';

// ACTION CREATOR setShowModalWithdrawTrue
export const setShowModalWithdrawTrue = () => ({
  type: SET_SHOW_MODAL_WITHDRAW_TRUE,
});

// ACTION TYPE SET_SHOW_MODAL_WITHDRAW_TRUE
export const SET_SHOW_MODAL_WITHDRAW_FALSE = 'SET_SHOW_MODAL_WITHDRAW_FALSE';

// ACTION CREATOR setShowModalWithdrawFalse
export const setShowModalWithdrawFalse = () => ({
  type: SET_SHOW_MODAL_WITHDRAW_FALSE,
});

// ACTION TYPE GET_ID_FROM_POT_DETAIL
export const GET_ID_FROM_POT_DETAIL = 'GET_ID_FROM_POT_DETAIL';

// ACTION CREATOR getIdFromPotDetail
export const getIdFromPotDetail = (id) => ({
  type: GET_ID_FROM_POT_DETAIL,
  id,
});

// ACTION TYPE SAVE_POT_DATAS
export const SAVE_POT_DATAS = 'SAVE_POT_DATAS';

// ACTION CREATOR savePotDatas
export const savePotDatas = (datas) => ({
  type: SAVE_POT_DATAS,
  datas,
});

// ACTION TYPE SET_MOVES
export const SET_MOVES = 'SET_MOVES';

// ACTION CREATOR savePotDatas
export const setMoves = (moves) => ({
  type: SET_MOVES,
  moves,
});
