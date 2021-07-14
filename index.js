window.onload = (function () {

    const form_toggle__btn = $('#main-form__toggle')[0];

    const reviews_links = $('.review_link');

    const slider_btns = $('.main-slider__buttons input');

    const slider_btns_left = $('.main-slider__left-btn');
    const slider_btns_right = $('.main-slider__right-btn');

    form_toggle__btn.addEventListener('click', () => {

      const toggle_block = $('.main-form__toggle-block')[0];
      const toggle_btn = $('#main-form__toggle')[0];

      if (toggle_block.classList.contains('hide-block')) {
        toggle_block.classList.remove('hide-block');

        toggle_btn.classList.remove('toggle-up');
        toggle_btn.classList.add('toggle-down');

      } else {
        toggle_block.classList.add('hide-block');

        toggle_btn.classList.remove('toggle-down');
        toggle_btn.classList.add('toggle-up');
      }
    });

    for (let index = 0; index < slider_btns.length; index++) {
      let slider_btn = slider_btns[index];
      slider_btn.addEventListener('click', ClickSliderButton)
    }
    for (let index = 0; index < reviews_links.length; index++) {

      let review_link = reviews_links[index];
      review_link.addEventListener('click', toggleReviews)
    }
    for (let index = 0; index < slider_btns_left.length; index++) {
      let slider_btn_left = slider_btns_left[index];
      slider_btn_left.addEventListener('click', changeSliderBlockLeft)
    }
    for (let index = 0; index < slider_btns_right.length; index++) {
      let slider_btn_right = slider_btns_right[index];
      slider_btn_right.addEventListener('click', changeSliderBlockRight)
    }

    function changeSliderBlockLeft() {

      const slider_blocks = $('.main-slider__row');

      for (let index = 0; index < slider_blocks.length; index++) {

        const slider_block = slider_blocks[index];

        if (!slider_block.classList.contains('is-hidden')) {

          slider_block.classList.add('is-hidden');

          const prev_slider_block = slider_block.previousElementSibling;
          let current_el;

          if (prev_slider_block && prev_slider_block.classList.contains('main-slider__row')) {
            prev_slider_block.classList.remove('is-hidden');
            current_el = prev_slider_block.id;
          } else {
            const cur_slider_block = slider_blocks[slider_blocks.length - 1];
            cur_slider_block.classList.remove('is-hidden');
            current_el = cur_slider_block.id;
          }

          current_el = current_el.replace('car', 'car_');

          const slider_btns = $('.main-slider__buttons input');

          for (let index = 0; index < slider_btns.length; index++) {

            let slider_btn = slider_btns[index];
            if (slider_btn.id != current_el) {
              slider_btn.checked = false;
            } else {
              slider_btn.checked = true;
            }
          }

          break;
        }
      }
    };

    function changeSliderBlockRight() {
      const slider_blocks = $('.main-slider__row');

      for (let index = 0; index < slider_blocks.length; index++) {

        const slider_block = slider_blocks[index];

        if (!slider_block.classList.contains('is-hidden')) {

          slider_block.classList.add('is-hidden');

          const next_slider_block = slider_block.nextElementSibling;
          let current_el;

          if (next_slider_block && next_slider_block.classList.contains('main-slider__row')) {
            next_slider_block.classList.remove('is-hidden');
            current_el = next_slider_block.id;
          } else {
            const cur_slider_block = slider_blocks[0];
            cur_slider_block.classList.remove('is-hidden');
            current_el = cur_slider_block.id;
          }

          current_el = current_el.replace('car', 'car_');

          const slider_btns = $('.main-slider__buttons input');

          for (let index = 0; index < slider_btns.length; index++) {

            let slider_btn = slider_btns[index];
            if (slider_btn.id != current_el) {
              slider_btn.checked = false;
            } else {
              slider_btn.checked = true;
            }
          }

          break;
        }
      }
    }

    function toggleReviews(event) {

      event.preventDefault();

      let review_all_text = event.target.previousElementSibling;
      let review_text = review_all_text.previousElementSibling;

      if (review_all_text.classList.contains('is-hidden')) {
        review_all_text.classList.remove('is-hidden');
        review_text.classList.add('is-hidden');
        event.target.innerHTML = 'Свернуть отзыв';
      } else {
        review_text.classList.remove('is-hidden');
        review_all_text.classList.add('is-hidden');
        event.target.innerHTML = 'Читать полностью';
      }
    }

    function ClickSliderButton(event) {

      let current_el = event.target.id;

      current_el = current_el.replace('_', '');

      const current_slider_block = $('#' + current_el)[0];

      const slider_blocks = $('.main-slider__row');

      for (let index = 0; index < slider_blocks.length; index++) {
        const slider_block = slider_blocks[index];
        slider_block.classList.add('is-hidden');
      }

      if (current_slider_block.classList.contains('is-hidden')) {
        current_slider_block.classList.remove('is-hidden');
      }
    }

    const addCityElement = $('#addCity')[0];
    addCityElement.addEventListener('change', addCityInForm);

    function addCityInForm(event) {

      event.preventDefault();

      const current_value = event.target.value;
      event.target.value = '';

      const cur_input = $('#city-select')[0];

      for (let index = 0; index < cur_input.children.length; index++) {

        let el = cur_input.children[index];

        if (el.innerHTML == current_value) {
          return;
        }
      }

      let new_select = document.createElement('option');
      new_select.innerHTML = current_value;
      new_select.value = cur_input.children.length;
      cur_input.appendChild(new_select);
      cur_input.value = new_select.value;
    }
  }
);


