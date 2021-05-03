import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import ButtonSpinner from '../../components/layouts/ButtonSpinner';


const CreateProject = (props) => {
    

   
    
    const [serviceData, setServiceData] = useState({
        name: '',
        loading: false,
        service: '',
        description: ''
    });

    const { name, service, description, loading} = serviceData;


    const [showS, setShowS] = useState(false);

    useEffect(() => {
        scrollTop()

    }, []);

    
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };


      const config = {
        headers: {
          ContentType: 'application/json',
          
        },
    };
    const createProject = async (e) => {

        e.preventDefault();

        console.log(serviceData);

                
                await Axios.post(`${process.env.REACT_APP_API_URL}/projects/writing`, {...serviceData}, config).
                then((resp) => {
                    if(resp){
                        
          
                          // clear storage
                    localStorage.clear();
                    // set new storage items
                    localStorage.setItem('token', resp.data.token);
                    localStorage.setItem('userId', resp.data.data._id);
                    localStorage.setItem('isLoggedIn', true);
                      
             if(resp.data.data.length === 0){
                props.history.push('/userdash');
             }else{
                props.history.push('/userdash');
             }

             setServiceData({loading: false});

                    }
                    
                }).
                catch((err) => {
                
                    setServiceData({loading: false});
                })
                
            }
            
        

    

    return(
        <>
        
        <section className="hero home-hero ui-full-bg-norm"  style={{backgroundImage: 'url("../../images/assets/bg@back-five.jpg")'}}>
                <div className="container">
                  
                    <div className="ui-wrapper-large">

                        <div className="row">

                            <div className="col-md-5 mx-auto">
                         

                         
                                <div className="c--box ui-box-shadow-dark-fade mrgt1">
          

                                    <form onSubmit={createProject}>
                                       
                                            <>
                                                <div className="form-group">
                                                <h3 className='font-gilroybold brand-purpledark fs-20 mb-1 text-center mrgt1 mrgb2'>Create a Project</h3>
                                                   
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">Service</label>
                                                    <input type="text"
                                                    defaultValue={(e) => {setServiceData({...serviceData, service: e.target.value})} } 
                                                    onChange={(e) => {setServiceData({...serviceData, service:e.target.value})}} 
                                                    className="font-gilroymedium fs-15 form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">Project Name</label>
                                                    <input type="text"
                                                    defaultValue={(e) => {setServiceData({...serviceData, name: e.target.value})} } 
                                                    onChange={(e) => {setServiceData({...serviceData, name:e.target.value})}} 
                                                    className="font-gilroymedium fs-15 form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <label className="font-gilroymedium brandcox-firefly fs-14 mb-1">Tell us what you want to do</label>
                                                    <textarea 
                                                     defaultValue={(e) => {setServiceData({...serviceData, description: e.target.value})} } 
                                                     onChange={(e) => {setServiceData({...serviceData, description:e.target.value})}} 
                                                    className="font-gilroy fs-15 form-control" />
                                                </div>
                                               


                                                <div className="">
                                                   
                                                           
                                                

                                                {
                                                        loading ?
                                                        
                                                        (<button className="btn big-btn hero-start btn-block bg-brand-yellow onmineshaft font-gilroybold" disabled><ButtonSpinner /></button>) :
                                                        (<button className="btn big-btn hero-start btn-block bg-brand-yellow onmineshaft font-gilroybold">Create Project</button>) 
                                                    }
                                                 
                                                </div>
                                           
                                            </>


                                    </form>
                                    

                                </div>

                               
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section>     

 </>
    )

}

export default CreateProject;