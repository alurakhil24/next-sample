import { initAuth0 } from '@auth0/nextjs-auth0';
export default initAuth0({
    clientId: 'kNcjrFl850tgh567j6EzTRaOLwIFz1pb',
    domain: 'next-client.us.auth0.com',
    clientSecret: 'M9b5qV54MIe6OP-4SiWRmb8qpOPbY1BafX68qd_DM1uso_3s414MfSIeqix7-Q0N',
    scope: 'openid profile',
    redirectUri: 'http://localhost:3000/api/callback',
    postLogoutRedirectUri: 'http://localhost:3000/logout',
    session: {
        cookieSecret: '76wZ+5cSUM7nrSns43TuUAu1BZjHV+yuTUrsIeVQ7RI='
    }
})