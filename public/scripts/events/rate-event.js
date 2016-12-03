'use strict';

(() => {
    const $eventInfo = $('.event-info'),
        $likeBtn = $('.like-btn'),
        $dislikeBtn = $('.dislike-btn');

    $likeBtn.one('click', function(event) {
        console.log('like button is clicked');
        return Promise.resolve()
            .then(() => {
                let ratedEventId = $eventInfo.attr('id');  
                console.log(ratedEventId);
                return {
                    ratedEventId: ratedEventId,
                    rate: 'like'
                };
            })
            .then((ratedEvent) => {
                console.log(ratedEvent);
                $.ajax({
                    url: '/events/' + ratedEvent.ratedEventId,
                    method: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(ratedEvent)
                })
                .done((res) => {
                    console.log('liked succeded');
                })
                .fail((err) => {
                    let errorObject = JSON.parse(err.responseText);
                    return errorObject;
                });
            });

    });
    $dislikeBtn.one('click', function(event) {
        console.log('dislike button is clicked');
        return Promise.resolve()
            .then(() => {
                let ratedEventId = $eventInfo.attr('id');  
                console.log(ratedEventId);
                return {
                    ratedEventId: ratedEventId,
                    rate: 'dislike'
                };
            })
            .then((ratedEvent) => {
                console.log(ratedEvent);
                $.ajax({
                    url: '/events/' + ratedEvent.ratedEventId,
                    method: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(ratedEvent)
                })
                .done((res) => {
                    console.log('disliked succeded');
                })
                .fail((err) => {
                    let errorObject = JSON.parse(err.responseText);
                    return errorObject;
                });
            });

    });
})();