window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: '',
    },
    axisX: {
      viewportMinimum: 1,
      viewportMaximum: 30
    },
    axisY: {
      // title: "Количество просмотров",
      //gridColor: "#ff4545",
      gridDashType: "dash",
      viewportMinimum: 0,
      viewportMaximum: 200
    },
    data: [
      {        
        color: "#ff4545",
        type: "area",
        dataPoints: [
          { x: 1, y: 0 },
          { x: 2, y: 20 },
          { x: 3, y: 0 },
          { x: 4, y: 0 },
          { x: 5, y: 100 },
          { x: 6, y: 89 },
          { x: 7, y: 0 },
          { x: 8, y: 0 },
          { x: 9, y: 0 },
          { x: 10, y: 123 },
          { x: 11, y: 0 },
          { x: 12, y: 0 },
          { x: 13, y: 0 },
          { x: 14, y: 0 },
          { x: 15, y: 0 },
          { x: 16, y: 0 },
          { x: 17, y: 122 },
          { x: 18, y: 50 },
          { x: 19, y: 0 },
          { x: 20, y: 0 },
          { x: 21, y: 39 },
          { x: 22, y: 0 },
          { x: 23, y: 0 },
          { x: 24, y: 0 },
          { x: 25, y: 89 },
          { x: 26, y: 0 },
          { x: 27, y: 0 },
          { x: 28, y: 0 },
          { x: 29, y: 0 },
          { x: 30, y: 0 },
        ]
      },
    ]
  });

  chart.render();

  let graph30Day = document.querySelector('#stats-for-30-day'),
      graph60Day = document.querySelector('#stats-for-60-day');


  let listItemBtn30Day1 = document.querySelector('#list__item-30Day-1'),
      listItemBtn30Day2 = document.querySelector('#list__item-30Day-2'),
      listItemBtn30Day3 = document.querySelector('#list__item-30Day-3'),
      listItemBtn30Day4 = document.querySelector('#list__item-30Day-4');

  let listItemBtn60Day1 = document.querySelector('#list__item-60Day-1'),
      listItemBtn60Day2 = document.querySelector('#list__item-60Day-2'),
      listItemBtn60Day3 = document.querySelector('#list__item-60Day-3'),
      listItemBtn60Day4 = document.querySelector('#list__item-60Day-4');


  if(graph30Day) graph30Day.onclick = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: '',
      },
      axisX: {
        viewportMinimum: 1,
        viewportMaximum: 30
      },
      axisY: {
        // title: "Количество просмотров",
        //gridColor: "#ff4545",
        gridDashType: "dash",
        viewportMinimum: 0,
        viewportMaximum: 200
      },
      data: [
        {        
          color: "#ff4545",
          type: "area",
          dataPoints: [
            { x: 1, y: 0 },
            { x: 2, y: 20 },
            { x: 3, y: 0 },
            { x: 4, y: 0 },
            { x: 5, y: 100 },
            { x: 6, y: 89 },
            { x: 7, y: 0 },
            { x: 8, y: 0 },
            { x: 9, y: 0 },
            { x: 10, y: 123 },
            { x: 11, y: 0 },
            { x: 12, y: 0 },
            { x: 13, y: 0 },
            { x: 14, y: 0 },
            { x: 15, y: 0 },
            { x: 16, y: 0 },
            { x: 17, y: 122 },
            { x: 18, y: 50 },
            { x: 19, y: 0 },
            { x: 20, y: 0 },
            { x: 21, y: 39 },
            { x: 22, y: 0 },
            { x: 23, y: 0 },
            { x: 24, y: 0 },
            { x: 25, y: 89 },
            { x: 26, y: 0 },
            { x: 27, y: 0 },
            { x: 28, y: 0 },
            { x: 29, y: 0 },
            { x: 30, y: 0 },
          ]
        },
      ]
    });

    listItemBtn60Day1.classList.add('d-none');
    listItemBtn60Day2.classList.add('d-none');
    listItemBtn60Day3.classList.add('d-none');
    listItemBtn60Day4.classList.add('d-none');

    listItemBtn30Day1.classList.remove('d-none');
    listItemBtn30Day2.classList.remove('d-none');
    listItemBtn30Day3.classList.remove('d-none');
    listItemBtn30Day4.classList.remove('d-none');

    chart.render();
  };

  if(graph60Day) graph60Day.onclick = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: '',
      },
      axisX: {
        viewportMinimum: 1,
        viewportMaximum: 60
      },
      axisY: {
        // title: "Количество просмотров",
        //gridColor: "#ff4545",
        gridDashType: "dash",
        viewportMinimum: 0,
        viewportMaximum: 200
      },
      data: [
        {        
          color: "#ff4545",
          type: "area",
          dataPoints: [
            { x: 1, y: 20 },
            { x: 2, y: 30 },
            { x: 3, y: 40 },
            { x: 4, y: 50 },
            { x: 5, y: 100 },
            { x: 6, y: 100 },
            { x: 7, y: 50 },
            { x: 8, y: 100 },
            { x: 9, y: 100 },
            { x: 10, y: 100 },
            { x: 11, y: 50 },
            { x: 12, y: 100 },
            { x: 13, y: 100 },
            { x: 14, y: 100 },
            { x: 15, y: 100 },
            { x: 16, y: 100 },
            { x: 17, y: 100 },
            { x: 18, y: 100 },
            { x: 19, y: 100 },
            { x: 20, y: 100 },
            { x: 21, y: 199 },
            { x: 22, y: 100 },
            { x: 23, y: 100 },
            { x: 24, y: 100 },
            { x: 25, y: 50 },
            { x: 26, y: 199 },
            { x: 27, y: 100 },
            { x: 28, y: 100 },
            { x: 29, y: 100 },
            { x: 30, y: 100 },
            { x: 31, y: 100 },
            { x: 32, y: 100 },
            { x: 33, y: 100 },
            { x: 34, y: 10 },
            { x: 35, y: 100 },
            { x: 36, y: 100 },
            { x: 37, y: 100 },
            { x: 38, y: 199 },
            { x: 39, y: 100 },
            { x: 40, y: 50 },
            { x: 41, y: 100 },
            { x: 42, y: 100 },
            { x: 43, y: 100 },
            { x: 44, y: 100 },
            { x: 45, y: 199 },
            { x: 46, y: 100 },
            { x: 47, y: 50 },
            { x: 48, y: 100 },
            { x: 49, y: 100 },
            { x: 50, y: 100 },
            { x: 51, y: 100 },
            { x: 52, y: 100 },
            { x: 53, y: 100 },
            { x: 54, y: 110 },
            { x: 55, y: 100 },
            { x: 56, y: 100 },
            { x: 57, y: 100 },
            { x: 58, y: 100 },
            { x: 59, y: 100 },
            { x: 60, y: 100 },
          ]
        },
      ]
    });

    listItemBtn30Day1.classList.add('d-none');
    listItemBtn30Day2.classList.add('d-none');
    listItemBtn30Day3.classList.add('d-none');
    listItemBtn30Day4.classList.add('d-none');

    listItemBtn60Day1.classList.remove('d-none');
    listItemBtn60Day2.classList.remove('d-none');
    listItemBtn60Day3.classList.remove('d-none');
    listItemBtn60Day4.classList.remove('d-none');

    chart.render();
  };


  if(listItemBtn30Day1) listItemBtn30Day1.onclick = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: '',
      },
      axisX: {
        viewportMinimum: 1,
        viewportMaximum: 30
      },
      axisY: {
        // title: "Количество просмотров",
        //gridColor: "#ff4545",
        gridDashType: "dash",
        viewportMinimum: 0,
        viewportMaximum: 200
      },
      data: [
        {        
          color: "#ff4545",
          type: "area",
          dataPoints: [
            { x: 1, y: 0 },
            { x: 2, y: 20 },
            { x: 3, y: 0 },
            { x: 4, y: 0 },
            { x: 5, y: 100 },
            { x: 6, y: 89 },
            { x: 7, y: 0 },
            { x: 8, y: 22 },
            { x: 9, y: 0 },
            { x: 10, y: 123 },
            { x: 11, y: 0 },
            { x: 12, y: 0 },
            { x: 13, y: 13 },
            { x: 14, y: 0 },
            { x: 15, y: 0 },
            { x: 16, y: 0 },
            { x: 17, y: 122 },
            { x: 18, y: 50 },
            { x: 19, y: 0 },
            { x: 20, y: 0 },
            { x: 21, y: 39 },
            { x: 22, y: 0 },
            { x: 23, y: 0 },
            { x: 24, y: 0 },
            { x: 25, y: 89 },
            { x: 26, y: 0 },
            { x: 27, y: 0 },
            { x: 28, y: 0 },
            { x: 29, y: 0 },
            { x: 30, y: 0 },
          ]
        },
      ]
    });

    chart.render();
  };

  if(listItemBtn30Day2) listItemBtn30Day2.onclick = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: '',
      },
      axisX: {
        viewportMinimum: 1,
        viewportMaximum: 30
      },
      axisY: {
        // title: "Количество просмотров",
        //gridColor: "#ff4545",
        gridDashType: "dash",
        viewportMinimum: 0,
        viewportMaximum: 200
      },
      data: [
        {        
          color: "#ff4545",
          type: "area",
          dataPoints: [
            { x: 1, y: 0 },
            { x: 2, y: 20 },
            { x: 3, y: 0 },
            { x: 4, y: 0 },
            { x: 5, y: 100 },
            { x: 6, y: 89 },
            { x: 7, y: 0 },
            { x: 8, y: 22 },
            { x: 9, y: 0 },
            { x: 10, y: 15 },
            { x: 11, y: 0 },
            { x: 12, y: 0 },
            { x: 13, y: 13 },
            { x: 14, y: 0 },
            { x: 15, y: 0 },
            { x: 16, y: 0 },
            { x: 17, y: 190 },
            { x: 18, y: 50 },
            { x: 19, y: 0 },
            { x: 20, y: 0 },
            { x: 21, y: 39 },
            { x: 22, y: 0 },
            { x: 23, y: 0 },
            { x: 24, y: 0 },
            { x: 25, y: 0 },
            { x: 26, y: 0 },
            { x: 27, y: 0 },
            { x: 28, y: 13 },
            { x: 29, y: 0 },
            { x: 30, y: 0 },
          ]
        },
      ]
    });

    chart.render();
  };

  if(listItemBtn30Day3) listItemBtn30Day3.onclick = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: '',
      },
      axisX: {
        viewportMinimum: 1,
        viewportMaximum: 30
      },
      axisY: {
        // title: "Количество просмотров",
        //gridColor: "#ff4545",
        gridDashType: "dash",
        viewportMinimum: 0,
        viewportMaximum: 200
      },
      data: [
        {        
          color: "#ff4545",
          type: "area",
          dataPoints: [
            { x: 1, y: 10 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
            { x: 4, y: 21 },
            { x: 5, y: 100 },
            { x: 6, y: 89 },
            { x: 7, y: 0 },
            { x: 8, y: 22 },
            { x: 9, y: 0 },
            { x: 10, y: 15 },
            { x: 11, y: 0 },
            { x: 12, y: 0 },
            { x: 13, y: 13 },
            { x: 14, y: 0 },
            { x: 15, y: 0 },
            { x: 16, y: 0 },
            { x: 17, y: 190 },
            { x: 18, y: 50 },
            { x: 19, y: 0 },
            { x: 20, y: 0 },
            { x: 21, y: 39 },
            { x: 22, y: 0 },
            { x: 23, y: 15 },
            { x: 24, y: 0 },
            { x: 25, y: 0 },
            { x: 26, y: 0 },
            { x: 27, y: 0 },
            { x: 28, y: 13 },
            { x: 29, y: 0 },
            { x: 30, y: 0 },
          ]
        },
      ]
    });

    chart.render();
  };

  if(listItemBtn30Day4) listItemBtn30Day4.onclick = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: '',
      },
      axisX: {
        viewportMinimum: 1,
        viewportMaximum: 30
      },
      axisY: {
        // title: "Количество просмотров",
        //gridColor: "#ff4545",
        gridDashType: "dash",
        viewportMinimum: 0,
        viewportMaximum: 200
      },
      data: [
        {        
          color: "#ff4545",
          type: "area",
          dataPoints: [
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
            { x: 4, y: 0 },
            { x: 5, y: 0 },
            { x: 6, y: 0 },
            { x: 7, y: 0 },
            { x: 8, y: 0 },
            { x: 9, y: 0 },
            { x: 10, y: 0 },
            { x: 11, y: 0 },
            { x: 12, y: 0 },
            { x: 13, y: 0 },
            { x: 14, y: 0 },
            { x: 15, y: 0 },
            { x: 16, y: 0 },
            { x: 17, y: 0 },
            { x: 18, y: 0 },
            { x: 19, y: 0 },
            { x: 20, y: 0 },
            { x: 21, y: 0 },
            { x: 22, y: 0 },
            { x: 23, y: 0 },
            { x: 24, y: 0 },
            { x: 25, y: 0 },
            { x: 26, y: 0 },
            { x: 27, y: 0 },
            { x: 28, y: 0 },
            { x: 29, y: 0 },
            { x: 30, y: 0 },
          ]
        },
      ]
    });

    chart.render();
  };


  if(listItemBtn60Day1) listItemBtn60Day1.onclick = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: '',
      },
      axisX: {
        viewportMinimum: 1,
        viewportMaximum: 60
      },
      axisY: {
        // title: "Количество просмотров",
        //gridColor: "#ff4545",
        gridDashType: "dash",
        viewportMinimum: 0,
        viewportMaximum: 200
      },
      data: [
        {        
          color: "#ff4545",
          type: "area",
          dataPoints: [
            { x: 1, y: 20 },
            { x: 2, y: 30 },
            { x: 3, y: 40 },
            { x: 4, y: 50 },
            { x: 5, y: 100 },
            { x: 6, y: 100 },
            { x: 7, y: 50 },
            { x: 8, y: 100 },
            { x: 9, y: 100 },
            { x: 10, y: 100 },
            { x: 11, y: 50 },
            { x: 12, y: 100 },
            { x: 13, y: 100 },
            { x: 14, y: 100 },
            { x: 15, y: 100 },
            { x: 16, y: 100 },
            { x: 17, y: 100 },
            { x: 18, y: 100 },
            { x: 19, y: 100 },
            { x: 20, y: 100 },
            { x: 21, y: 199 },
            { x: 22, y: 100 },
            { x: 23, y: 100 },
            { x: 24, y: 100 },
            { x: 25, y: 50 },
            { x: 26, y: 199 },
            { x: 27, y: 100 },
            { x: 28, y: 100 },
            { x: 29, y: 100 },
            { x: 30, y: 100 },
            { x: 31, y: 100 },
            { x: 32, y: 100 },
            { x: 33, y: 100 },
            { x: 34, y: 10 },
            { x: 35, y: 100 },
            { x: 36, y: 100 },
            { x: 37, y: 100 },
            { x: 38, y: 199 },
            { x: 39, y: 100 },
            { x: 40, y: 50 },
            { x: 41, y: 100 },
            { x: 42, y: 100 },
            { x: 43, y: 100 },
            { x: 44, y: 100 },
            { x: 45, y: 199 },
            { x: 46, y: 100 },
            { x: 47, y: 50 },
            { x: 48, y: 100 },
            { x: 49, y: 100 },
            { x: 50, y: 100 },
            { x: 51, y: 100 },
            { x: 52, y: 100 },
            { x: 53, y: 100 },
            { x: 54, y: 110 },
            { x: 55, y: 100 },
            { x: 56, y: 100 },
            { x: 57, y: 100 },
            { x: 58, y: 100 },
            { x: 59, y: 100 },
            { x: 60, y: 100 },
          ]
        },
      ]
    });

    chart.render();
  };

  if(listItemBtn60Day2) listItemBtn60Day2.onclick = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: '',
      },
      axisX: {
        viewportMinimum: 1,
        viewportMaximum: 60
      },
      axisY: {
        // title: "Количество просмотров",
        //gridColor: "#ff4545",
        gridDashType: "dash",
        viewportMinimum: 0,
        viewportMaximum: 200
      },
      data: [
        {        
          color: "#ff4545",
          type: "area",
          dataPoints: [
            { x: 1, y: 20 },
            { x: 2, y: 30 },
            { x: 3, y: 40 },
            { x: 4, y: 50 },
            { x: 5, y: 100 },
            { x: 6, y: 100 },
            { x: 7, y: 50 },
            { x: 8, y: 100 },
            { x: 9, y: 100 },
            { x: 10, y: 100 },
            { x: 11, y: 50 },
            { x: 12, y: 100 },
            { x: 13, y: 100 },
            { x: 14, y: 100 },
            { x: 15, y: 100 },
            { x: 16, y: 100 },
            { x: 17, y: 100 },
            { x: 18, y: 100 },
            { x: 19, y: 100 },
            { x: 20, y: 100 },
            { x: 21, y: 199 },
            { x: 22, y: 100 },
            { x: 23, y: 100 },
            { x: 24, y: 100 },
            { x: 25, y: 50 },
            { x: 26, y: 199 },
            { x: 27, y: 100 },
            { x: 28, y: 100 },
            { x: 29, y: 100 },
            { x: 30, y: 100 },
            { x: 31, y: 100 },
            { x: 32, y: 100 },
            { x: 33, y: 100 },
            { x: 34, y: 10 },
            { x: 35, y: 100 },
            { x: 36, y: 100 },
            { x: 37, y: 100 },
            { x: 38, y: 199 },
            { x: 39, y: 100 },
            { x: 40, y: 50 },
            { x: 41, y: 100 },
            { x: 42, y: 100 },
            { x: 43, y: 100 },
            { x: 44, y: 100 },
            { x: 45, y: 199 },
            { x: 46, y: 100 },
            { x: 47, y: 50 },
            { x: 48, y: 100 },
            { x: 49, y: 100 },
            { x: 50, y: 100 },
            { x: 51, y: 100 },
            { x: 52, y: 100 },
            { x: 53, y: 100 },
            { x: 54, y: 110 },
            { x: 55, y: 100 },
            { x: 56, y: 100 },
            { x: 57, y: 100 },
            { x: 58, y: 100 },
            { x: 59, y: 100 },
            { x: 60, y: 100 },
          ]
        },
      ]
    });

    chart.render();
  };

  if(listItemBtn60Day3) listItemBtn60Day3.onclick = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: '',
      },
      axisX: {
        viewportMinimum: 1,
        viewportMaximum: 60
      },
      axisY: {
        // title: "Количество просмотров",
        //gridColor: "#ff4545",
        gridDashType: "dash",
        viewportMinimum: 0,
        viewportMaximum: 200
      },
      data: [
        {        
          color: "#ff4545",
          type: "area",
          dataPoints: [
            { x: 1, y: 20 },
            { x: 2, y: 30 },
            { x: 3, y: 40 },
            { x: 4, y: 50 },
            { x: 5, y: 100 },
            { x: 6, y: 100 },
            { x: 7, y: 50 },
            { x: 8, y: 100 },
            { x: 9, y: 100 },
            { x: 10, y: 100 },
            { x: 11, y: 50 },
            { x: 12, y: 100 },
            { x: 13, y: 100 },
            { x: 14, y: 100 },
            { x: 15, y: 100 },
            { x: 16, y: 100 },
            { x: 17, y: 100 },
            { x: 18, y: 100 },
            { x: 19, y: 100 },
            { x: 20, y: 100 },
            { x: 21, y: 199 },
            { x: 22, y: 100 },
            { x: 23, y: 100 },
            { x: 24, y: 100 },
            { x: 25, y: 50 },
            { x: 26, y: 199 },
            { x: 27, y: 100 },
            { x: 28, y: 100 },
            { x: 29, y: 100 },
            { x: 30, y: 100 },
            { x: 31, y: 100 },
            { x: 32, y: 100 },
            { x: 33, y: 100 },
            { x: 34, y: 10 },
            { x: 35, y: 100 },
            { x: 36, y: 100 },
            { x: 37, y: 100 },
            { x: 38, y: 199 },
            { x: 39, y: 100 },
            { x: 40, y: 50 },
            { x: 41, y: 100 },
            { x: 42, y: 100 },
            { x: 43, y: 100 },
            { x: 44, y: 100 },
            { x: 45, y: 199 },
            { x: 46, y: 100 },
            { x: 47, y: 50 },
            { x: 48, y: 100 },
            { x: 49, y: 100 },
            { x: 50, y: 100 },
            { x: 51, y: 100 },
            { x: 52, y: 100 },
            { x: 53, y: 100 },
            { x: 54, y: 110 },
            { x: 55, y: 100 },
            { x: 56, y: 100 },
            { x: 57, y: 100 },
            { x: 58, y: 100 },
            { x: 59, y: 100 },
            { x: 60, y: 100 },
          ]
        },
      ]
    });

    chart.render();
  };

  if(listItemBtn60Day4) listItemBtn60Day4.onclick = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: '',
      },
      axisX: {
        viewportMinimum: 1,
        viewportMaximum: 60
      },
      axisY: {
        // title: "Количество просмотров",
        //gridColor: "#ff4545",
        gridDashType: "dash",
        viewportMinimum: 0,
        viewportMaximum: 200
      },
      data: [
        {        
          color: "#ff4545",
          type: "area",
          dataPoints: [
            { x: 1, y: 20 },
            { x: 2, y: 30 },
            { x: 3, y: 40 },
            { x: 4, y: 50 },
            { x: 5, y: 100 },
            { x: 6, y: 100 },
            { x: 7, y: 50 },
            { x: 8, y: 100 },
            { x: 9, y: 100 },
            { x: 10, y: 100 },
            { x: 11, y: 50 },
            { x: 12, y: 100 },
            { x: 13, y: 100 },
            { x: 14, y: 100 },
            { x: 15, y: 100 },
            { x: 16, y: 100 },
            { x: 17, y: 100 },
            { x: 18, y: 100 },
            { x: 19, y: 100 },
            { x: 20, y: 100 },
            { x: 21, y: 199 },
            { x: 22, y: 100 },
            { x: 23, y: 100 },
            { x: 24, y: 100 },
            { x: 25, y: 50 },
            { x: 26, y: 199 },
            { x: 27, y: 100 },
            { x: 28, y: 100 },
            { x: 29, y: 100 },
            { x: 30, y: 100 },
            { x: 31, y: 100 },
            { x: 32, y: 100 },
            { x: 33, y: 100 },
            { x: 34, y: 10 },
            { x: 35, y: 100 },
            { x: 36, y: 100 },
            { x: 37, y: 100 },
            { x: 38, y: 199 },
            { x: 39, y: 100 },
            { x: 40, y: 50 },
            { x: 41, y: 100 },
            { x: 42, y: 100 },
            { x: 43, y: 100 },
            { x: 44, y: 100 },
            { x: 45, y: 199 },
            { x: 46, y: 100 },
            { x: 47, y: 50 },
            { x: 48, y: 100 },
            { x: 49, y: 100 },
            { x: 50, y: 100 },
            { x: 51, y: 100 },
            { x: 52, y: 100 },
            { x: 53, y: 100 },
            { x: 54, y: 110 },
            { x: 55, y: 100 },
            { x: 56, y: 100 },
            { x: 57, y: 100 },
            { x: 58, y: 100 },
            { x: 59, y: 100 },
            { x: 60, y: 100 },
          ]
        },
      ]
    });

    chart.render();
  };

}