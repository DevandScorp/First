const _ = require('lodash');

console.log(_.isEqual(1,2));
const templateSource = `<div class=\"welcome\">\n
                            <p class="welcome__message">Name: <%= name %></p>\n
                            <p class="welcome__message">Surname: <%= surname %></p>\n
                        </div>`;
export const template = _.template(templateSource);