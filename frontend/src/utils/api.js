const url = "http://localhost:3000/"

/* const getResult = (res) => {
  if (res.ok) {
    //console.log(res.text())
    return res.text();
  } else {
    return Promise.reject (`Ошибка: ${res.status}`)
  }
}; */

export const getTotalTime = () => {
  return fetch(`${url}totaltime`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(res => {
    return res.text();
  })
}

export const getMashineTimeWork = () => {
  return fetch(`${url}mashinework`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(res => {
    return res.text();
  })
}

export const getMashineDownTime = () => {
  return fetch(`${url}mashindowntime`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(res => {
    return res.text();
  })
}

export const getProcessAmount = () => {
  return fetch(`${url}processamount`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(res => {
    return res.text();
  })
}

export const getAverageQuantity = () => {
  return fetch(`${url}averagequantity`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(res => {
    return res.text();
  })
}

export const getMaxOperatingTime = () => {
  return fetch(`${url}getmaxoperatingtime`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(res => {
    return res.text();
  })
}

export const getMaxDownTime = () => {
  return fetch(`${url}getmaxdowntime`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(res => {
    return res.text();
  })
}

export const getCumulativeTotal = () => {
  return fetch(`${url}getcumulativetotal`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(res => {
    return res.json();
  })
}