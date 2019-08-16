export const CHANGE_HIDDEN_STATUS = 'CHANGE_HIDDEN_STATUS';

export const changeHiddenStatus = newStatus => ({
  type: CHANGE_HIDDEN_STATUS,
  newStatus,
});
