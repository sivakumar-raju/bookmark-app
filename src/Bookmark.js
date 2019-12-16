import React from 'react';
import './App.css';


class Bookmark extends React.Component{
 
   constructor(props){
     super(props);
     this.state={
       title:'Bookmarks',
       act:0,
       index:'',
       datas:[]

     }
   }

   componentDidMount(){
     this.refs.url.focus()
   }

   fSubmit = (e) =>{
      e.preventDefault();
      console.log('hello world')

      let datas=this.state.datas;
      let url=this.refs.url.value;
      let tagname=this.refs.tagname.value;

      let data={
        url,tagname
      }
      datas.push(data);

      this.setState({
        datas:datas
      })

      this.refs.myform.reset();
      this.refs.url.focus();
   }

   fRemove = (i) =>{
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas : datas
    });
  }

  fEdit = (i) =>{
    let datas=this.state.datas[i];
    this.refs.url.value=datas.url;
    this.refs.tagname.value=datas.tagname;
    this.setState({
      act:1,
      index: i
    })

    this.refs.url.focus()
  }

  render(){
    let datas=this.state.datas;
    return (
    <div  className="tc bt-100px">
          <h1 className="athelas grow light-blue">{this.state.title}</h1>
          <form ref="myform" className="myform">
             <input  className=" grow"  ref="url" id="url" type="url" placeholder="Enter bookmark URL"  />
             <input  className=" grow"  ref="tagname" id="tagname" type="text" placeholder="Enter TagName" />
             <button onClick={this.fSubmit} id="btn" className="serif grow"  >ADD</button><br/>
          </form>
          <pre>
          <div className="fl w-20">
             { 
              datas.map((data,i)=>
               <li key={i} className="myList  bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5  fl w-100 ">
                 {i+1}.<a href={data.url} id="a">{data.tagname}</a>
                 <button onClick={()=>this.fRemove(i)} className="dib br1 pa1 ma2 grow bw2 " id="remove">Remove</button>
                 <button onClick={()=>this.fEdit(i)} className="dib br1 pa1 ma2 grow bw2  " id="edit"> Edit </button>
               </li>
              )
             }
             </div>
          </pre>

    </div>
  );
  }
}

export default Bookmark;
