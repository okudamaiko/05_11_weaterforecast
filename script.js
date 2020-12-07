'use strict';

// geolocation
navigator.geolocation.getCurrentPosition(success, fail);

function success(pos) {
    ajaxRequest(pos.coords.latitude, pos.coords.longitude);
}

function fail(error) {
    alert('位置情報の取得に失敗しました。エラーコード：' + error.code);
}

// UTCをミリ秒に
function utcToJSTime(utcTime) {
    return utcTime * 1000;
}

// データ取得
function ajaxRequest(lat, long) {
    const url = 'https://api.openweathermap.org/data/2.5/forecast';
    const appId = '';

    $.ajax({
        url: url,
        data: {
            appid: appId,
            lat: lat,
            lon: long,
            units: 'metric',
            lang: 'ja'
        }
    })
        .done(function (data) {
            // 都市名、国名
            $('#place').text(data.city.name + ', ' + data.city.country);

            // 天気予報データ
            data.list.forEach(function (forecast, index) {
                const dateTime = new Date(utcToJSTime(forecast.dt));
                const month = dateTime.getMonth() + 1;
                const date = dateTime.getDate();
                const hours = dateTime.getHours();
                const min = String(dateTime.getMinutes()).padStart(2, '0');
                const temperature = Math.round(forecast.main.temp);
                const description = forecast.weather[0].description;
                const iconPath = `images/${forecast.weather[0].icon}.svg`;

                // 現在の天気とそれ以外で出力を変える
                if (index === 0) {
                    const currentWeather = `
                <div class="icon"><img src="${iconPath}"></div>
                <div class="info">
                    <p>
                        <span class="description">現在の天気：${description}</span>
                        <span class="temp">${temperature}</span>°C
                    </p>
                </div>`;
                    $('#weather').html(currentWeather);
                } else {
                    const tableRow = `
                <tr>
                    <td class="info">
                        ${month}/${date} ${hours}:${min}
                    </td>
                    <td class="icon"><img src="${iconPath}"></td>
                    <td><span class="description">${description}</span></td>
                    <td><span class="temp">${temperature}°C</span></td>
                </tr>`;
                    $('#forecast').append(tableRow);
                }
            });
        })
        .fail(function () {
            console.log('$.ajax failed!');
        })
    // }
    // // データ取得1Fukuoka

    $.ajax({
        url: url,
        data: {
            appid: appId,
            lat: 33.58674254690313,
            lon: 130.39447782628721,
            units: 'metric',
            lang: 'ja'
        }
    })
        .done(function (data) {
            // 都市名、国名
            $('#place1').text('福岡');

            // 天気予報データ
            data.list.forEach(function (forecast, index) {
                const dateTime = new Date(utcToJSTime(forecast.dt));
                const month = dateTime.getMonth() + 1;
                const date = dateTime.getDate();
                const hours = dateTime.getHours();
                const min = String(dateTime.getMinutes()).padStart(2, '0');
                const temperature = Math.round(forecast.main.temp);
                const description = forecast.weather[0].description;
                const iconPath = `images/${forecast.weather[0].icon}.svg`;

                // 現在の天気とそれ以外で出力を変える
                if (index === 0) {
                    const currentWeather = `
                <div class="icon"><img src="${iconPath}"></div>
                <div class="info">
                    <p>
                        <span class="description">現在の天気：${description}</span>
                        <span class="temp">${temperature}</span>°C
                    </p>
                </div>`;
                    $('#weather1').html(currentWeather);
                } else {
                    const tableRow = `
                <tr>
                    <td class="info">
                        ${month}/${date} ${hours}:${min}
                    </td>
                    <td class="icon"><img src="${iconPath}"></td>
                    <td><span class="description">${description}</span></td>
                    <td><span class="temp">${temperature}°C</span></td>
                </tr>`;
                    $('#forecast1').append(tableRow);
                }
            });
        })
        .fail(function () {
            console.log('$.ajax failed!');
        })
    // // データ取得2tokyo

    $.ajax({
        url: url,
        data: {
            appid: appId,
            lat: 35.66951481726257,
            lon: 139.70300762635102,
            units: 'metric',
            lang: 'ja'
        }
    })
        .done(function (data) {
            // 都市名、国名
            $('#place2').text('東京');

            // 天気予報データ
            data.list.forEach(function (forecast, index) {
                const dateTime = new Date(utcToJSTime(forecast.dt));
                const month = dateTime.getMonth() + 1;
                const date = dateTime.getDate();
                const hours = dateTime.getHours();
                const min = String(dateTime.getMinutes()).padStart(2, '0');
                const temperature = Math.round(forecast.main.temp);
                const description = forecast.weather[0].description;
                const iconPath = `images/${forecast.weather[0].icon}.svg`;

                // 現在の天気とそれ以外で出力を変える
                if (index === 0) {
                    const currentWeather = `
                <div class="icon"><img src="${iconPath}"></div>
                <div class="info">
                    <p>
                        <span class="description">現在の天気：${description}</span>
                        <span class="temp">${temperature}</span>°C
                    </p>
                </div>`;
                    $('#weather2').html(currentWeather);
                } else {
                    const tableRow = `
                <tr>
                    <td class="info">
                        ${month}/${date} ${hours}:${min}
                    </td>
                    <td class="icon"><img src="${iconPath}"></td>
                    <td><span class="description">${description}</span></td>
                    <td><span class="temp">${temperature}°C</span></td>
                </tr>`;
                    $('#forecast2').append(tableRow);
                }
            });
        })
        .fail(function () {
            console.log('$.ajax failed!');
        })

    // データ取得　札幌
    $.ajax({
        url: url,
        data: {
            appid: appId,
            lat: 43.07277087017895,
            lon: 141.36144716919134,
            units: 'metric',
            lang: 'ja'
        }
    })
        .done(function (data) {
            // 都市名、国名
            $('#place3').text('札幌');

            // 天気予報データ
            data.list.forEach(function (forecast, index) {
                const dateTime = new Date(utcToJSTime(forecast.dt));
                const month = dateTime.getMonth() + 1;
                const date = dateTime.getDate();
                const hours = dateTime.getHours();
                const min = String(dateTime.getMinutes()).padStart(2, '0');
                const temperature = Math.round(forecast.main.temp);
                const description = forecast.weather[0].description;
                const iconPath = `images/${forecast.weather[0].icon}.svg`;

                // 現在の天気とそれ以外で出力を変える
                if (index === 0) {
                    const currentWeather = `
                <div class="icon"><img src="${iconPath}"></div>
                <div class="info">
                    <p>
                        <span class="description">現在の天気：${description}</span>
                        <span class="temp">${temperature}</span>°C
                    </p>
                </div>`;
                    $('#weather3').html(currentWeather);
                } else {
                    const tableRow = `
                <tr>
                    <td class="info">
                        ${month}/${date} ${hours}:${min}
                    </td>
                    <td class="icon"><img src="${iconPath}"></td>
                    <td><span class="description">${description}</span></td>
                    <td><span class="temp">${temperature}°C</span></td>
                </tr>`;
                    $('#forecast3').append(tableRow);
                }
            });
        })
        .fail(function () {
            console.log('$.ajax failed!');
        })

}


