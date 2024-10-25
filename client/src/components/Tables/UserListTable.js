import { Box } from '@mui/material';

import {
    Badge,
    Button, Pagination, Table, TableBody, TableCell, TableContainer, TableFooter, TableHeader, TableRow
} from '@windmill/react-ui';
import React, { useState } from 'react';
import { TrashIcon, PlayIcon, PauseIcon } from '../../icons';



// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

function Header() {
    return (
        <TableHeader>
            <tr>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>EMAIL</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Subscription</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
            </tr>
        </TableHeader>
    )
}

function Body({ dataTable, onAction }) {

    // const [open, setOpen] = useState(false);
    // const [userData, setUser] = useState('');

    // const handleSendEmail = (data) => {
    //     setOpen(true)
    //     setUser(data)
    // }



    return (
        <TableBody>
            {dataTable?.map((userList, i) => (
                <TableRow key={i}>
                    <TableCell>
                        <span className="text-sm">{userList.uniqId}</span>
                    </TableCell>
                    <TableCell>
                        <div className="flex items-center text-sm">
                            <div>
                                <p className="font-semibold">{userList?.listingTitle}</p>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell>
                        <span className="text-sm">{userList.email}</span>
                    </TableCell>

                    <TableCell>
                        <span className="text-sm">{userList.listingType}</span>
                    </TableCell>
                    <TableCell>
                        <span className="text-sm">&#8364;{userList.listingPrice}</span>
                    </TableCell>
                    <TableCell>
                        <span className="text-sm">{userList.city}</span>
                    </TableCell>

                    <TableCell>
                        <Badge type={userList?.subscription?.type === "PREMIUM" ? "warning" : userList?.subscription?.type === "MEDIUM" ? "primary" : "neutral"}>{userList?.subscription?.type}</Badge>
                    </TableCell>
                    <TableCell>
                        <Badge type={!userList?.subscriptionPause ? "primary" : "danger"}>{userList?.subscriptionPause ? "Unpublished" : "Published"}</Badge>
                    </TableCell>
                    <TableCell>
                        <div className="flex items-center space-x-4">
                            {
                                userList.subscriptionPause ? (
                                    <Button layout="link" size="icon" aria-label="Edit Password" onClick={(e) => { e.preventDefault(); if (onAction) { onAction(userList, 'unpauseListing') } }}>
                                        <PlayIcon className="w-5 h-5" aria-hidden="true" />
                                    </Button>
                                ) : (
                                    <Button layout="link" size="icon" aria-label="Edit Password" onClick={(e) => { e.preventDefault(); if (onAction) { onAction(userList, 'pauseListing') } }}>
                                        <PauseIcon className="w-5 h-5" aria-hidden="true" />
                                    </Button>

                                )
                            }
                            <Button layout="link" size="icon" aria-label="Delete" onClick={(e) => { e.preventDefault(); if (onAction) { onAction(userList, 'deleteListing') } }}>
                                <TrashIcon className="w-5 h-5" aria-hidden="true" />
                            </Button>
                        </div>

                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}


function SearchUserLists({ searchTable, onAction }) {

    // const [open, setOpen] = useState(false);
    // const [userData, setUser] = useState('');

    // const handleSendEmail = (data) => {
    //     setOpen(true)
    //     setUser(data)
    // }
    return (
        <TableBody>
            {searchTable?.map((userList, i) => (

                <TableRow key={i}>
                    <TableCell>
                        <span className="text-sm">{userList.uniqId}</span>
                    </TableCell>
                    <TableCell>
                        <div className="flex items-center text-sm">
                            <div>
                                <p className="font-semibold">{userList?.listingTitle}</p>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell>
                        <span className="text-sm">{userList.email}</span>
                    </TableCell>

                    <TableCell>
                        <span className="text-sm">{userList.listingType}</span>
                    </TableCell>
                    <TableCell>
                        <span className="text-sm">&#8364;{userList.listingPrice}</span>
                    </TableCell>
                    <TableCell>
                        <span className="text-sm">{userList.city}</span>
                    </TableCell>

                    <TableCell>
                        <Badge type={userList?.subscription?.type === "PREMIUM" ? "warning" : userList?.subscription?.type === "MEDIUM" ? "primary" : "neutral"}>{userList?.subscription?.type}</Badge>
                    </TableCell>
                    <TableCell>

                        <Badge type={!userList?.subscriptionPause ? "primary" : "danger"}>{userList?.subscriptionPause ? "Unpublished" : "Published"}</Badge>
                    </TableCell>
                    <TableCell>
                        <div className="flex items-center space-x-4">
                            {
                                userList.subscriptionPause ? (
                                    <Button layout="link" size="icon" aria-label="Edit Password" onClick={(e) => { e.preventDefault(); if (onAction) { onAction(userList, 'unpauseListing') } }}>
                                        <PlayIcon className="w-5 h-5" aria-hidden="true" />
                                    </Button>
                                ) : (
                                    <Button layout="link" size="icon" aria-label="Edit Password" onClick={(e) => { e.preventDefault(); if (onAction) { onAction(userList, 'pauseListing') } }}>
                                        <PauseIcon className="w-5 h-5" aria-hidden="true" />
                                    </Button>

                                )
                            }
                            <Button layout="link" size="icon" aria-label="Delete" onClick={(e) => { e.preventDefault(); if (onAction) { onAction(userList, 'deleteListing') } }}>
                                <TrashIcon className="w-5 h-5" aria-hidden="true" />
                            </Button>
                        </div>
                    </TableCell>
                </TableRow>

            ))}
        </TableBody>
    )
}

export default function UserListTable({ userLists, resultsPerPage, totalResults, onAction, onPageChange, searchUserLists, value }) {



    return (
        <Box>


            <Box>
                <TableContainer className="mb-8">
                    <Table>
                        <Header />
                        {value ? <SearchUserLists searchTable={searchUserLists} onAction={onAction} />
                            :
                            <Body dataTable={userLists} onAction={onAction} />
                        }

                    </Table>
                    {
                        !value && <TableFooter>
                            <Pagination
                                totalResults={totalResults}
                                resultsPerPage={resultsPerPage}
                                onChange={onPageChange}
                                label="Table navigation"
                            />
                        </TableFooter>
                    }
                </TableContainer>
            </Box>
        </Box>
    )
}
