import dayjs from 'dayjs';

const createDateTemplate = (dateFrom, format) => dayjs(dateFrom).format(format);

const createOffersTemplate = (offers) => {
  let offersTemplate = '';

  offers.forEach((offer) => {
    const { title, price } = offer;
    const offerTemplate = `<div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage">
            <label class="event__offer-label" for="event-offer-luggage-1">
              <span class="event__offer-title">${title}</span>
                          &plus;&euro;&nbsp;
              <span class="event__offer-price">${price}</span>
                        </label>
          </div>`;
    offersTemplate += offerTemplate;
  });

  return offersTemplate;
};

export { createDateTemplate, createOffersTemplate };