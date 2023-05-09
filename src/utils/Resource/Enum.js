//Trạng thái của form
export const FormMode = {
  FORM_ADD: "add",
  FORM_EDIT: "edit",
  FORM_DUPLICATE: "duplicate",
};

//Trạng thái của toast
export const ToastMode = {
  SUCCESS: "success",
  ERROR: "error",
};

//Trạng thái của chức năng xóa
export const DeleteMode = {
  ONE: 1,
  MULTI: 0,
};

//Trạng thái của popup
export const PopupMode = {
  ERROR_POPUP: "error-popup",
  CONFIRM_FORM: "confirm-form",
  CONFIRM_DELETE: "confirm-delete",
};

export const OrderStatus = {
  Pending: 0,
  Confirm: 1,
  Cancel: 2,
};

export const TimeAnalyst = {
  CurrentWeek: 1,
  LastWeek: 2,
  CurrentMonth: 3,
  LastMonth: 4,
  CurrentYear: 5,
  LastYear: 6,
}
