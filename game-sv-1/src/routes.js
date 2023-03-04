// @index(['./routes/*.svelte'], (f, _, e) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
import Battle from './routes/Battle.svelte';
import Bj from './routes/Bj.svelte';
import Clicker1 from './routes/Clicker1.svelte';
import Home from './routes/Home.svelte';
import NotFound from './routes/NotFound.svelte';

// @endindex

const routes = {
	'/': Home,
	'/bj': Bj,
	'/battle': Battle,
	'/game': Clicker1,
	'*': NotFound
}

export default routes
