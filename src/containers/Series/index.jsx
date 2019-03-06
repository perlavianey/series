import React,{Component} from 'react'
import SeriesList from '../../components/SeriesList'
import Loader from '../../components/Loader'
import Intro from '../../components/Intro'
class Series extends Component{
    state = {
        seriesName:'',
        series:[],
        isFetching:false,
    }
    
    busca = (e) =>{
        this.setState({seriesName:e.target.value,isFetching:true})
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response=>response.json())
        .then(res=>this.setState({series:res,isFetching:false}));
    }
    render(){
        const {series, seriesName, isFetching} = this.state;
        
        return (
            <div>
                <Intro message="Here you can find your most beloved series"/>
                <div>
                    <input type='text' placeholder="Search serie" value={seriesName} onChange={this.busca}></input>
                    <br/><br/>
                </div>
                {
                    !isFetching && series.length===0 && seriesName.trim()==='' 
                    && <p>Please enter series name to search</p>
                } 
                {
                    !isFetching && series.length===0 && seriesName.trim() !==''
                    && <p>No series were found</p>
                }
                {
                    isFetching && <Loader/>
                }
                {
                    !isFetching && series.length>0 && <SeriesList list={this.state.series}/>
                }
                
            </div>
        )
    }
}

export default Series;