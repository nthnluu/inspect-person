import React from 'react';
import {getSession} from 'next-auth/client'

export default function Index() {
    return (
        <></>
    );
}

export async function getServerSideProps({req, res}) {
    const session = await getSession({req})


    if (session) {
        res.writeHead(302, {location: '/dashboard'})
        res.end()
    } else {
        res.writeHead(302, {location: '/api/auth/signin'})
        res.end()
    }

}
