$(document).ready(function () {
    $('#modal').iziModal({
      openFullscreen: true,
    });

    $('#pong-image').on('click', function (e) {
        e.preventDefault();
        $('#modal').iziModal('open');
    });
});
