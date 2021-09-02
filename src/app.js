import { useEffect } from 'react';
import './style.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home';
import NewPost from './pages/NewPost/NewPost';
import Header from './components/Header/Header';
import {getAllPosts} from './store/actions/actions';
import {useDispatch} from 'react-redux'


export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPosts());
    }, [])
    return <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/newpost" exact component={NewPost} />
        </Switch>
    </Router>
}