// from data.js
var tableData = data;

// YOUR CODE HERE!

// display default table

d3.select("tbody")
        .selectAll("tr")
        .data(tableData)
        .enter()
        .append("tr")
        .html(function(d) {
            return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td>
            <td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
        });


// select filter button

var filter_button = d3.select("#filter-btnx")

filter_button.on("click",function(){
    d3.event.preventDefault();
    // get input value
    var user_input_date = d3.select("#datetime").property("value")
    // console.log(user_input_date)
    // appy filter on user input
    var filtered_data = tableData.filter(function(d){
        return d.datetime === user_input_date
    })
    // console.log(filtered_data)
    // remove previous table
    d3.select("tbody")
        .selectAll("tr")
        .remove()
    // display filtered table
    d3.select("tbody")
        .selectAll("tr")
        .data(filtered_data)
        .enter()
        .append("tr")
        .html(function(d) {
            return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td>
            <td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
        });

})



