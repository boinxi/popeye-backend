const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const issuer = "popeye.co.il";
const key = "ORugtH0254rHEQoiRDADI0oiqX7y2HFT";


export const generateJwtForUser = (userId: string) => {
    const payload = {
        "iss": issuer,
        "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": [
                "user"
            ],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": userId
        }
    };

    return jwt.sign(payload, key);
};

export const decodeAccessToken: (accessToken: String) => (string | null) = (accessToken: String) => {
    try {
        const decoded = jwt.verify(accessToken, key);
        return decoded['https://hasura.io/jwt/claims']['x-hasura-user-id'];
    } catch(err) {
        return null;
    }
};