// @index(['./api/**/*.js', './static/**/*.js'], f => ` export { default as ${f.name} } from '${f.path}';`)
export { default as sleep } from './api/sleep'
export { default as supabase } from './api/supabase'
// @endindex
// @index(['./stores/**/*.js'], f => ` export { ${f.name} } from '${f.path}';`)
export { _game } from './stores/_game'
export { _profile } from './stores/_profile'
export { _settings } from './stores/_settings'
export { _user } from './stores/_user'
// @endindex

export const addcomma = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

// export const navData = appData.map((x) => x.link)
// export const pageData = appData.map((x) => x.head)
