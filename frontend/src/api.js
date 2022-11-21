import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get list of all companies */

  static async getCompanies(searchTerms) {
    //use optional chaining for when searchTerms is an empty object
    const terms = searchTerms?.name ? searchTerms : {};
    let res = await this.request(`companies`, terms);
    return res.companies
  }

  /** Get details on a job by id*/

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job
  }

  /** Get list of jobs */

  static async getJobs(searchTerms) {
    //use optional chaining for when searchTerms is an empty object
    const terms = searchTerms?.title ? searchTerms : {};
    let res = await this.request(`jobs`, terms);
    return res.jobs
  };

  /** Register user and returns JWT*/

  static async registerUser(userInfo) {
    let res = await this.request(`auth/register`, userInfo, 'post');
    return { token: res.token, user: userInfo.username}
  }

  /** Logins user */

  static async login(loginInfo) {
    let res = await this.request(`auth/token`, loginInfo, 'post');
    return { token: res.token }
  }

  /** Get user details */
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user
  }

  /** Updates a user */
  static async updateUser(userInfo) {
    const { firstName, lastName, email } = userInfo;
    let res = await this.request(`users/${userInfo.username}`, {firstName, lastName, email}, 'patch');
    return res.user
  };

  /** Apply to a job */
  static async apply(jobId, username) {
    let res = await this.request(`users/${username}/jobs/${jobId}`, undefined, 'post' );
    return res
  }
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export { JoblyApi };
