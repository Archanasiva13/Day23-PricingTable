import React from 'react'

function Pricingcard(props) {
  
  return <>
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{props.data.Plan}</h5>
          <h6 className="card-price text-center">${props.data.Price}<span className="period">/month</span></h6>
          <hr />
          <ul className="fa-ul">
            <li className={props.data.UsersEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.UsersEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.Users}</li>
            <li className={props.data.StorageEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.StorageEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.Storage}</li>
            <li className={props.data.PublicProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.PublicProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.PublicProjects}</li>
            <li className={props.data.CommunityAccessEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.CommunityAccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.CommunityAccess}</li>
            <li className={props.data.PrivateProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.PrivateProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.PrivateProjects}</li>
            <li className={props.data.PhoneSupportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.PhoneSupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.PhoneSupport}</li>
            <li className={props.data.SubDomainEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.SubDomainEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.SubDomain}</li>
            <li className={props.data.StatusReportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.StatusReportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.StatusReports}</li>
            </ul>
          
          <div className="d-grid">
            <a href="Javascript(void)" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>

  </>
}

export default Pricingcard


