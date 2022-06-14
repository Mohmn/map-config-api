CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE map_config
(
    id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id uuid NOT NULL UNIQUE,
    theme jsonb NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    updated_at timestamp without time zone NOT NULL DEFAULT now()
)