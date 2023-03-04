// import { base } from '$app/paths'
export const prerender = true
export const ssr = false
export async function load({ url: { pathname } }) {
	return {pathname}
}
// export async function load({ url: { pathname } }) {
// 	let res = await fetch(`${base}/page.json`)
// 	let d = await res.json()
// 	if (d) {
// 		return {
// 			page: d,
// 			pathname: pathname
// 		}
// 	} else {
// 		return {
// 			page: null,
// 			pathname: pathname
// 		}
// 	}
// }
