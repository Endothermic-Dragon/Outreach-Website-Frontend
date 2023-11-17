const $ = (tag) => {
  let res = [...document.querySelectorAll(tag)];
  res.forEach(
    (el) => (el.on = (e, func) => el.addEventListener(e, (e) => func(e, el)))
  );
  res.onAll = (e, func) => res.map((el) => el.on(e, func));
  res.on = () => {
    throw new TypeError(
      'Cannot add event listener on multiple elements using "on". ' +
      'Use "onAll" to add to multiple elements, or select one element.'
    )
  }
  return res;
};

module.exports = { "$": $, "backend": "https://xtekoweg6sbdadhqxpetywgp3m0silph.lambda-url.us-east-1.on.aws/" }