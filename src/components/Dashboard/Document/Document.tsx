import React from 'react';
import './Document.scss';

import DocumentItemList from './DocumentItemList/DocumentItemList';

import { 
    HiFolder,
    HiFolderAdd,
    HiDatabase,
    HiDocumentReport,
    HiDocumentAdd,
    HiDocumentText,
    HiClipboardList,
    HiPaperClip,
} from 'react-icons/hi';

function Document() {
    return (
        <div className='Document'>
            <div className="Section">
                <h1 className='DocumentSectionTitle'>Folders</h1>
                <DocumentItemList data={foldersData} />
                <div className="Divider"><div></div></div>
            </div>
            <div className="Section">
                <h1 className='DocumentSectionTitle'>Documents</h1>
                <DocumentItemList data={documentsData} />
                <div className="Divider"><div></div></div>
            </div>
        </div>
    );
}

const foldersData = [
    {
        icon: <HiFolder />,
        name: 'Documents',
    },
    {
        icon: <HiFolder />,
        name: 'Homework',
    },
    {
        icon: <HiFolder />,
        name: 'Pages',
    },
    {
        icon: <HiFolder />,
        name: 'Documents',
    },
    {
        icon: <HiFolder />,
        name: 'Homework',
    },
    {
        icon: <HiFolder />,
        name: 'Pages',
    },
    {
        icon: <HiFolderAdd />,
        name: 'Add an Folder',
    },
];

const documentsData = [
    {
        icon: <HiDatabase />,
        name: 'Company Database',
    },
    {
        icon: <HiDocumentReport />,
        name: 'Finance Worksheet',
    },
    {
        icon: <HiDocumentText />,
        name: 'Shopping List',
    },
    {
        icon: <HiPaperClip />,
        name: 'Notes',
    },
    {
        icon: <HiDocumentText />,
        name: 'Homework',
    },
    {
        icon: <HiClipboardList />,
        name: 'To-do',
    },
    {
        icon: <HiDocumentAdd />,
        name: 'Add an Document',
    },
];

export default Document;
