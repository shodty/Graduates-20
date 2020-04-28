export const state = () => ({
  show: 'welcome'
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
