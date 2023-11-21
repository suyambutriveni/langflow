"""Adds updated_at and folder cols

Revision ID: 7d2162acc8b2
Revises: f5ee9749d1a6
Create Date: 2023-11-21 20:56:53.998781

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
import sqlmodel


# revision identifiers, used by Alembic.
revision: str = '7d2162acc8b2'
down_revision: Union[str, None] = 'f5ee9749d1a6'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('component', schema=None) as batch_op:
        batch_op.drop_index('ix_component_frontend_node_id')
        batch_op.drop_index('ix_component_name')

    op.drop_table('component')
    op.drop_table('flowstyle')
    with op.batch_alter_table('apikey', schema=None) as batch_op:
        batch_op.alter_column('name',
               existing_type=sa.VARCHAR(),
               nullable=False)

    with op.batch_alter_table('flow', schema=None) as batch_op:
        batch_op.add_column(sa.Column('updated_at', sa.DateTime(), nullable=True))
        batch_op.add_column(sa.Column('folder', sqlmodel.sql.sqltypes.AutoString(), nullable=True))

    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('flow', schema=None) as batch_op:
        batch_op.drop_column('folder')
        batch_op.drop_column('updated_at')

    with op.batch_alter_table('apikey', schema=None) as batch_op:
        batch_op.alter_column('name',
               existing_type=sa.VARCHAR(),
               nullable=True)

    op.create_table('flowstyle',
    sa.Column('color', sa.VARCHAR(), nullable=False),
    sa.Column('emoji', sa.VARCHAR(), nullable=False),
    sa.Column('flow_id', sa.CHAR(length=32), nullable=True),
    sa.Column('id', sa.CHAR(length=32), nullable=False),
    sa.ForeignKeyConstraint(['flow_id'], ['flow.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('id')
    )
    op.create_table('component',
    sa.Column('id', sa.CHAR(length=32), nullable=False),
    sa.Column('frontend_node_id', sa.CHAR(length=32), nullable=False),
    sa.Column('name', sa.VARCHAR(), nullable=False),
    sa.Column('description', sa.VARCHAR(), nullable=True),
    sa.Column('python_code', sa.VARCHAR(), nullable=True),
    sa.Column('return_type', sa.VARCHAR(), nullable=True),
    sa.Column('is_disabled', sa.BOOLEAN(), nullable=False),
    sa.Column('is_read_only', sa.BOOLEAN(), nullable=False),
    sa.Column('create_at', sa.DATETIME(), nullable=False),
    sa.Column('update_at', sa.DATETIME(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('component', schema=None) as batch_op:
        batch_op.create_index('ix_component_name', ['name'], unique=False)
        batch_op.create_index('ix_component_frontend_node_id', ['frontend_node_id'], unique=False)

    # ### end Alembic commands ###
