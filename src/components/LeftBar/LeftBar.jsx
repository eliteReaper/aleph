import React from 'react';
import Profile from '../ProfileIcon/ProfileIcon';
import chat from '../../icons/chat.svg';
import classroom from '../../icons/classroom.svg';
import group from '../../icons/group.svg';
import home from '../../icons/home.svg';
import noti_bell from '../../icons/noti_bell.svg';
import status_sign from '../../icons/status_sign.svg';
import { GroupSelectModal } from '../group/GroupSelectModal';


class LeftBar extends React.Component {
    state = {
        groupSelectShow: false
    }

    toggleGroupSelectShow = () => {
        this.setState({
            groupSelectShow: !this.state.groupSelectShow
        });
    }

    render() {
        return (
            <div >
                <Profile />
                <ul className="list-group ml-0">
                    <a href='/' className="list-group-item border-0"><img className=" border-2" src={home} height='40rem' width='40rem' alt="logo" /></a>
                    <a className="list-group-item border-0"><img src={noti_bell} height='40rem' width='40rem' alt="logo" /></a>
                    <a href='/group' className="list-group-item border-0"><img src={group} height='40rem' width='40rem' alt="logo" /></a>
                    <a className="list-group-item border-0"><img src={chat} height='40rem' width='40rem' alt="logo" /></a>
                    <a href='/classroom' className="list-group-item border-0"><img src={classroom} height='40rem' width='40rem' alt="logo" /></a>
                    <a className="list-group-item border-0"><img src={status_sign} height='40rem' width='40rem' alt="logo" /></a>

                </ul>

            </ div>
        )
    }
}
export default LeftBar;