
import './App.css';
import React from 'react';
import Pricingcard from './components/pricingcard';

let data = [
  {
    Plan: "FREE",
    Price: "0",
    Users: "Singleuser",
    UsersEnabler: true,
    Storage: "5GB Storage",
    StorageEnabler: true,
    PublicProjects: "Unlimited Public Projects",
    PublicProjectsEnabler: true,
    CommunityAccess: "Community Access",
    CommunityAccessEnabler: true,
    PrivateProjects: "Unlimited Private Projects",
    PrivateProjectsEnabler: false,
    PhoneSupport: "Dedicated Phone Support",
    PhoneSupportEnabler: false,
    SubDomain: "Free Subdomain",
    SubDomainEnabler: false,
    StatusReport: "Monthly Status Reports",
    StatusReportEnabler: false
  },
  {
    Plan: "PLUS",
    Price: "9",
    Users: "5 users",
    UsersEnabler: true,
    Storage: "50GB Storage",
    StorageEnabler: true,
    PublicProjects: "Unlimited Public Projects",
    PublicProjectsEnabler: true,
    CommunityAccess: "Community Access",
    CommunityAccessEnabler: true,
    PrivateProjects: "Unlimited Private Projects",
    PrivateProjectsEnabler: true,
    PhoneSupport: "Dedicated Phone Support",
    PhoneSupportEnabler: true,
    SubDomain: "Free Subdomain",
    SubDomainEnabler: true,
    StatusReport: "Monthly Status Reports",
    StatusReportEnabler: false

  },
  {
    Plan: "PRO",
    Price: "49",
    Users: "Unlimited users",
    UsersEnabler: true,
    Storage: "150GB Storage",
    StorageEnabler: true,
    PublicProjects: "Unlimited Public Projects",
    PublicProjectsEnabler: true,
    CommunityAccess: "Community Access",
    CommunityAccessEnabler: true,
    PrivateProjects: "Unlimited Private Projects",
    PrivateProjectsEnabler: true,
    PhoneSupport: "Dedicated Phone Support",
    PhoneSupportEnabler: true,
    SubDomain: "Unlimited Free Subdomain",
    SubDomainEnabler: true,
    StatusReport: "Monthly Status Reports",
    StatusReportEnabler: true



  }
]


function App() {
  return <>

    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            data.map((e, i) => {
              return <Pricingcard data={e} key={i} />
            })
          }
        </div>
      </div>
    </section>
  </>

}

export default App;
