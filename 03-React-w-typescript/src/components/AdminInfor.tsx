
import type { AdminInfoList } from '../types'

const AdminInfo = ({ admin }: { admin: AdminInfoList }) => {
  return (
    <div>
        <h2>Admin Information</h2>
        <p>ID: {admin.id}</p>
        <p>Name: {admin.name}</p>
        <p>Email: {admin.email}</p>
        <p>Role: {admin.role}</p>
    </div>
  )
}

export default AdminInfo