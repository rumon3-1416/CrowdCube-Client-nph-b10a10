export const get = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const post = async (url, doc) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doc),
    });

    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

export const put = async (url, doc) => {
  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doc),
    });

    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

export const patch = async (url, doc) => {
  try {
    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doc),
    });

    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

export const del = async url => {
  try {
    const res = await fetch(url, {
      method: 'DELETE',
    });

    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};
