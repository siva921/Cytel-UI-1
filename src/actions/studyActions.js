import getAPI from '../lib/Helper'
import axios from 'axios'
import { header } from '../lib/Helper'

export const getStudies = async () => {
    //const url = getAPI('getStudies')
    console.log("getStudies");
    const url = "https://localhost:44391/api/studies";
    //const url = "http://cytelwebapitest.ap-south-1.elasticbeanstalk.com/api/studies";
    const result = await axios({
        url,
        method: 'GET',
    })
    debugger;
    console.log("result---", result);
    if (result) {
        console.log("data-----123", result.data);
        return result.data;
    } else {
        throw new Error('Something went wrong')
    }
}

export const createStudy = async study => {

    //const url = getAPI('createStudies')
    const url = "https://localhost:44391/api/studies";
    //const url = "https://cytelwebapitest.ap-south-1.elasticbeanstalk.com/api/studies";
    console.log("url", url);
    const result = await axios({
        url,
        method: 'POST',
        data: study,
        header,
    })
    if (result.statusText) {
        return result.data
    } else {
        throw new Error('Something went wrong')
    }
}

export const deleteStudy = async id => {
    let url = "https://localhost:44391/Cytel/DeleteById?id=" + id;
    console.log("delete", url);
    //url = `${url}/${id}`
    console.log(url)
    const result = await axios({
        url,
        method: 'DELETE',
        header,
    })
    if (result.statusText) {
        return result.data
    } else {
        throw new Error('Something went wrong')
    }
}
