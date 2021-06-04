// Import axios for API call
import axios from "axios";
// API url
const BASEURL = "https://randomuser.me/api/?nat=us&results=100&inc=gender,name,email,dob,phone,id,picture"

// Axios API call
export default {
    getUsers: function() {
        return axios.get(BASEURL);
    }
};
// hello