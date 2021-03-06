import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Chirps from './components/Chirps';
import EditChirp from './components/EditChirp';
import AddChirp from './components/AddChirp';


const App: React.FC<IAppProps> = () => {

	return (
		<Router>
			<nav className="navbar sticky-top navbar-dark bg-warning">
				<Link to={'/'}>
					<button className="btn btn-outline-secondary" type="button">Chirps</button>
				</Link>
				<Link to={'/addchirp'}>
					<button className="btn btn-outline-secondary" type="button">Add Chirp</button>
				</Link>
			</nav>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/chirps" component={Chirps} />
				<Route path="/:id/admin" component={EditChirp} />
				<Route path="/addchirp" component={AddChirp} />
			</Switch>
		</Router>
	);
};

interface IAppProps { }

// interface IChirp {
// 	user: string;
// 	text: string;
// }

export default App;

// const App: React.FC<IAppProps> = (props: IAppProps) => {
// 	const [chirps, setChirps] = React.useState<IChirp[]>([]);

// 	React.useEffect(() => {
// 		(async () => {
// 			try {
// 				const res = await fetch('/api/chirps');
// 				const chirps = await res.json();
// 				setChirps(chirps);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		})();
// 	}, []);
