import { computed } from "vue"

export const useProps = (props, key, emit) => {
  return computed({
    get() {
      return props[key]
    },
    set(value) {
      emit(`update:${key}`, value)
    },
  })
}