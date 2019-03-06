import React,{Component} from 'react'
import Loader from '../../components/Loader'

class SingleSeries extends Component{
    state={
        show:null
    }
    componentDidMount(){
        const {id} = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then(response=>response.json())
        .then(res=>this.setState({show:res}));
    }
    render(){
        const {show} = this.state
        return <div>
            {show === null && <Loader/>}
            {show !== null && 
                <div>
                    <p>Name: {show.name}</p>
                    <p>Premiered: {show.premiered}</p>
                    <p>Rating: {show.rating.average}</p>
                    <p>Episodes:{show._embedded.episodes.length}</p>
                    <p>
                        {
                            show.image&&<img src={show.image.medium} alt="showPic"/>
                        }
                    </p>
                </div>
            }
        </div>
    }
}

export default SingleSeries;