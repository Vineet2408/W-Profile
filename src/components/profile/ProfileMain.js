import React, { Fragment, Component } from 'react'

import Card from '@workday/canvas-kit-react-card';
import PageHeader from '@workday/canvas-kit-react-page-header';
import MyProductAreas from './MyProductAreas';
import AccountDetails from './AccountDetails';
import MyTopGroups from './MyTopGroups';
import ProfileInfo from './ProfileInfo';
import { spacing } from '@workday/canvas-kit-react-core';
import CommunityDetails from './CommunityDetails';
import Accreditations from './Accreditations';
// import RecentBadges from './RecentBadges';

import AccountDetailsForm from './profileModalForms/AccountDetailsForm';
import ProfilePhotoForm from './profileModalForms/ProfilePhotoForm';
import BasicInfoForm from './profileModalForms/BasicInfoForm';
import MyProductAreasForm from './profileModalForms/MyProductAreasForm';
import Footer from './Footer';


class ProfileMain extends Component {

    constructor() {
        super();
        this.state = {
            user: {},
            showAccountDetailsModal: false,
            showProfilePhotoModal: false,
            showBasicInfoFormModal: false,
            showMyProductAreasModal: false
        }
    }

    async componentDidMount() {
        const response = await fetch(" http://localhost:3000/users/60");
        const user = await response.json();
        console.log(user.communityDetails);

        this.setState({ user: user });
    }

    closeAccountDetailsModal = (event) => {
        event.preventDefault();
        this.setState({
            showAccountDetailsModal: false
        })
    }

    openAccountDetailsModal = (event) => {
        event.preventDefault();
        this.setState({
            showAccountDetailsModal: true
        })
    }

    closeProfilePhotoModal = (event) => {
        event.preventDefault();
        this.setState({
            showProfilePhotoModal: false
        })
    }

    openProfilePhotoModal = (event) => {
        event.preventDefault();
        this.setState({
            showProfilePhotoModal: true
        })
    }

    closeBasicInfoFormModal = (event) => {
        event.preventDefault();
        this.setState({
            showBasicInfoFormModal: false
        })
    }

    openBasicInfoFormModal = (event) => {
        event.preventDefault();
        this.setState({
            showBasicInfoFormModal: true
        })
    }

    closeMyProductAreasModal = (event) => {
        event.preventDefault();
        this.setState({
            showMyProductAreasModal: false
        })
    }

    openMyProductAreasModal = (event) => {
        event.preventDefault();
        this.setState({
            showMyProductAreasModal: true
        })
    }


    render() {

        let profileInfo = {
            profilePic: this.state.user.profilePic,
            fullName: this.state.user.fullName,
            email: this.state.user.email,
            username: this.state.user.username,
            designation: this.state.user.designation,
            organisation: this.state.user.organisation,
            shortInfo: this.state.user.shortInfo,
            gender: this.state.user.gender,
            linkedProfileName: this.state.user.linkedProfileName,
            twitter: this.state.user.twitter,
            orgnizationUrl: this.state.user.orgnizationUrl,

        }

        return (
            <Fragment>
                <PageHeader className="" title="Workday Resource Center"
                // {<div><img className="rounded-circle border-0" src="https://toppng.com/uploads/preview/workday-logo-workday-11562888164rljyiqp8zf.png" height="50px" width="50px" alt=""/> Workday Resource Center</div>} style={{backgroundColor: "#0875E1"}}
                >
                    <img className="rounded-circle" src={profileInfo.profilePic} height="50px" width="50px" alt="" />
                </PageHeader>

                <div className="container">
                    <div className="row mt-4">
                        <div className="col-lg-8 w-100">
                            <div className="row m-1 mt-4 w-100">
                                <Card className="w-100" padding={spacing.zero}>
                                    <ProfileInfo profileInfo={profileInfo} openProfilePhotoModal={this.openProfilePhotoModal} openBasicInfoFormModal={this.openBasicInfoFormModal} />
                                </Card>
                            </div>
                            <div className="row m-1 mt-4">
                                <Card className="w-100">
                                    <MyProductAreas myProductAreas={this.state.user.myProductAreas} openModal={this.openMyProductAreasModal} />
                                </Card>
                            </div>

                            <div className="row m-1 mt-4">
                                <Card className="w-100">
                                    <MyTopGroups myTopGroups={this.state.user.MyTopGroups} />
                                </Card>
                            </div>
                        </div>

                        <div className="col-lg-4  col-md-offset-2" >
                            <div className="row m-1 mt-4">
                                <Card className="w-100">
                                    <AccountDetails
                                        user={this.state.user}
                                        openModal={this.openAccountDetailsModal}
                                    />
                                </Card>
                            </div>

                            <div className="row m-1 mt-4">
                                <Card className="w-100">
                                    <CommunityDetails communityDetails={this.state.user.communityDetails} />
                                </Card>
                            </div>

                            <div className="row m-1 mt-4">
                                <Card className="w-100">
                                    <Accreditations accreditations={this.state.user.Accredations} />
                                </Card>
                            </div>

                            <div className="row m-1 mt-4">
                                <Card className="w-100">
                                    {/* <RecentBadges /> */}
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

                {this.state.showAccountDetailsModal && <AccountDetailsForm user={this.state.user} closeModal={this.closeAccountDetailsModal} />}
                {this.state.showProfilePhotoModal && <ProfilePhotoForm profileInfo={profileInfo} closeModal={this.closeProfilePhotoModal} />}
                {this.state.showBasicInfoFormModal && <BasicInfoForm user={this.state.user} closeModal={this.closeBasicInfoFormModal} />}
                {this.state.showMyProductAreasModal && <MyProductAreasForm mpa={this.state.user.myProductAreas} closeModal={this.closeMyProductAreasModal} />}

            </Fragment>
        )
    }
}

export default ProfileMain;
