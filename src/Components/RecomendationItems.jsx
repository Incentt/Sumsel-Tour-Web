import React from 'react';

function RecommendationItems({ place }) {
    return (
        <div className="col-md-4">
            <div className="card">
                {place.photos && (
                    <img src={place.photos[0].getUrl({ maxWidth: 300 })} className="square-img" alt={place.name} />

                )}
                <div className="card-body">
                    <h5 className="card-title">{place.name}</h5>
                    {place.description && (
                        <p className="card-text">{place.description}</p>
                    )}
                    {place.websiteUri && (
                        <a href={place.websiteUri} className="btn btn-primary">Go to Website</a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RecommendationItems;