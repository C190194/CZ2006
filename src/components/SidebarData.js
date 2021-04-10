import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';
import * as BiIcons from 'react-icons/bi';
import * as GoIcons from 'react-icons/go';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Plan Timetable',
    path: '/planner',
    icon: <FcIcons.FcPlanner />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Share Time Table',
  //   path: '/share',
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Find Common Free Time Slots',
    path: '/findcommon',
    icon: <BiIcons.BiFileFind />,
    cName: 'nav-text'
  },
  {
    title: 'Discussion Forum',
    path: '/discuss',
    icon: <GoIcons.GoCommentDiscussion />,
    cName: 'nav-text'
  }
];