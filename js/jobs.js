// JavaScript code
const axios = require('axios');
const cheerio = require('cheerio');

const URL = "https://techjobsforgood.com/jobs/?impact_areas=Climate+Change&q=";

axios.get(URL)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);

        const jobListingsDiv = $("#jobListings");

        $(".column").each((index, div_job) => {
            const jobHeader = $(div_job).find(".header").text().trim();
            const jobLink = base_url + $(div_job).find("a.content").attr('href');

            const jobDiv = $("<div>");
            const headerElement = $("<h3>").text(jobHeader);
            const linkElement = $("<a>").text("Job Link").attr('href', jobLink);

            jobDiv.append(headerElement, linkElement);
            jobListingsDiv.append(jobDiv);
        });
    })
    .catch(error => console.log(error));
