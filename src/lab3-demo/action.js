// @flow

export const onItemAdd = (payload: { id:number, text:string, isEditing:boolean }) => (
  { type: 'ADD_ITEM', payload }
)

export const onItemDel = (id: number) => (
  { type: 'DEL_ITEM', id }
)

export const onItemEdit = (payload: { id:number, text:string, isEditing:boolean }) => (
  { type: 'EDIT_ITEM', payload }
)
