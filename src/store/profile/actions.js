export const SHOW_NAME = "SHOW_NAME";
export const CHANGE_NAME = "CHANGE_NAME";


export const toggleShowName = {
  type: SHOW_NAME
}

export const changeName = (value) => ({
  type: CHANGE_NAME,
  payload: value
})