import checker from './services/check/check'
const requester = () => {};
const storeService = {};
const mailer ={};
const timer = () => {}

const app = () => {
    const cb = () => {
        const data = requester(3000, cb);
        checker({ currentItems, storedItems, isEqual })
    }
    timer(cb)

}

export default app;