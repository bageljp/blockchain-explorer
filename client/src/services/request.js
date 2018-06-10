/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import agent from 'superagent';
export const post = (uri, payload) =>
    new Promise((resolve, reject) => {
        agent.post(process.env.PUBLIC_URL + uri)
            .send(payload)
            .set('Accept', 'application/json')
            .end(withPromiseCallback(resolve, reject))
    });
export const get = (uri) =>
    new Promise((resolve, reject) => {
        agent.get(process.env.PUBLIC_URL + uri)
            .set("Accept", "application/json")
            .end(withPromiseCallback(resolve, reject))
    });
export const put = (uri, payload) =>
    new Promise((resolve, reject) => {
        agent.put(process.env.PUBLIC_URL + uri)
            .send(payload)
            .set('Accept', 'application/json')
            .end(withPromiseCallback(resolve, reject))
    });
export const deleteRequest = (uri, payload) =>
    new Promise((resolve, reject) => {
        agent.delete(process.env.PUBLIC_URL + uri)
            .send(payload)
            .set('Accept', 'application/json')
            .end(withPromiseCallback(resolve, reject))
    });
export const withPromiseCallback = (resolve, reject) => (error, response) => {
    if (error) {
        console.error(error);
        reject({ error });
    } else {
        resolve(response.body);
    }
};
