export const state = () => ({
  show: 'none'
})

export const mutations = {
  showDiscipline: (state, discipline) => {
    state.show = discipline
  }
}

export const actions = {
  showDiscipline: (context, discipline) => {
    context.commit('showDiscipline', discipline)
  }
}
