import { setLayoutMiddleware } from '../server/middlewares/set-layout';

export const beforeGetServerSideProps = [setLayoutMiddleware];
